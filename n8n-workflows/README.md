# n8n Workflows - Instagram Automation

Automated workflows for Instagram content publishing using n8n Cloud + Meta Graph API.

## Workflows

| File | Description | Status |
|------|-------------|--------|
| `ig-scheduled-post.json` | Scheduled Instagram post publisher | Ready to import |
| `ig-dm-chatbot.json` | AI-powered DM auto-responder | Coming soon |

## Architecture

```
Google Sheet (Content Calendar)
        |
   [n8n Schedule Trigger - daily at 10:00 AM]
        |
   [Filter today's pending posts]
        |
   [Meta Graph API - Create Media Container]
        |
   [Wait 30s for processing]
        |
   [Check container status]
        |
   ┌─── FINISHED ───┐─── NOT READY ───┐
   |                 |                  |
   [Publish Post]    [Log Error]        |
   |                                    |
   [Update Sheet → "published"]         |
   [Notify via webhook (optional)]      |
```

## Setup

### Prerequisites
- Instagram Business or Creator account
- Meta App with Instagram Graph API enabled
- n8n Cloud instance
- Google Sheet as content calendar

### Google Sheet Format

Your content calendar sheet needs these columns:

| date | image_url | caption | hashtags | status | ig_post_id | published_at |
|------|-----------|---------|----------|--------|------------|--------------|
| 2026-04-05 | https://... | My caption | #tag1 #tag2 | pending | | |

- **date**: `YYYY-MM-DD` format
- **image_url**: Publicly accessible image URL (JPEG/PNG, max 8MB)
- **caption**: Post caption text
- **hashtags**: Hashtags separated by spaces
- **status**: `pending` → `published` (updated by workflow)

### Import to n8n Cloud

1. Open your n8n Cloud instance
2. Go to **Workflows** → **Import from File**
3. Select `ig-scheduled-post.json`
4. Configure credentials:
   - Set `INSTAGRAM_ACCESS_TOKEN` and `INSTAGRAM_BUSINESS_ACCOUNT_ID` as n8n environment variables
   - Connect your Google Sheets credential to the "Fetch Content Queue" node
   - Update the Google Sheet URL in the "Fetch Content Queue" node
5. Activate the workflow

### Important Notes

- **Image URLs must be public**: Instagram fetches images from the URL you provide. Use a CDN, public Google Drive link, or cloud storage.
- **Access Token expiration**: Long-lived tokens last ~60 days. Set up a token refresh workflow or monitor expiration.
- **Rate limits**: Meta Graph API allows ~25 posts/day for most accounts. The daily schedule avoids hitting limits.
- **Container processing**: The 30-second wait handles most cases. For video/carousel, increase to 60-120 seconds.

## Environment Variables

See `../.env.example` for the full list of required variables.
