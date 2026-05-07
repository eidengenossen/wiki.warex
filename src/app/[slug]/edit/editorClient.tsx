'use client'

import { useState } from 'react';
import { updateWikiPage } from '@/app/[slug]/edit/actions';

export default function EditorClient({ slug, initialContent, initialTitle }: any) {
  const [content, setContent] = useState(initialContent);
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    const result = await updateWikiPage(slug, content, initialTitle);
    if (result.success) {
      alert("Changes pushed to Warex!");
      window.location.href = `/${slug}`;
    }
    setIsSaving(false);
  };

  return (
    <div className="editor-container"> {/* Your preconfigured CSS class */}
      <textarea 
        value={content} 
        onChange={(e) => setContent(e.target.value)}
        className="wiki-textarea" 
      />
      <button 
        onClick={handleSave} 
        disabled={isSaving}
        className="save-btn"
      >
        {isSaving ? "Syncing..." : "Save Changes"}
      </button>
    </div>
  );
}