import {
  ModuleFields,
  RichTextField,
  BooleanField,
  TextField,
} from '@hubspot/cms-components/fields';

export function Component({ fieldValues }: any) {
  const content = fieldValues.content || '<p>Your blog post content goes here...</p>';
  const showTableOfContents = fieldValues.show_table_of_contents !== false;
  const showShareButtons = fieldValues.show_share_buttons !== false;

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .blog-content {
          font-size: var(--font-size-body);
          line-height: var(--line-height-relaxed);
          color: var(--text-secondary);
        }

        .blog-content h2 {
          font-size: var(--font-size-h2);
          font-weight: 500;
          color: var(--text-primary);
          margin: var(--spacing-xl) 0 var(--spacing-md);
          font-family: var(--font-headline);
          line-height: var(--line-height-tight);
        }

        .blog-content h3 {
          font-size: var(--font-size-h3);
          font-weight: 500;
          color: var(--text-primary);
          margin: var(--spacing-xl) 0 var(--spacing-sm);
          font-family: var(--font-headline);
          line-height: var(--line-height-normal);
        }

        .blog-content h4 {
          font-size: var(--font-size-h4);
          font-weight: 600;
          color: var(--text-primary);
          margin: var(--spacing-lg) 0 var(--spacing-sm);
        }

        .blog-content p {
          margin-bottom: var(--spacing-md);
        }

        .blog-content a {
          color: var(--text-coral);
          text-decoration: none;
          border-bottom: 1px solid var(--border-light);
          transition: var(--transition-fast);
        }

        .blog-content a:hover {
          border-bottom-color: var(--primary-coral);
        }

        .blog-content ul,
        .blog-content ol {
          margin: var(--spacing-md) 0;
          padding-left: var(--spacing-md);
        }

        .blog-content li {
          margin-bottom: var(--spacing-xs);
        }

        .blog-content blockquote {
          margin: var(--spacing-lg) 0;
          padding: var(--spacing-md) var(--spacing-lg);
          background: var(--bg-light-coral);
          border-left: 4px solid var(--primary-coral);
          border-radius: 0 var(--radius-md) var(--radius-md) 0;
          font-style: italic;
          color: var(--text-muted);
        }

        .blog-content blockquote p {
          margin-bottom: 0;
        }

        .blog-content img {
          max-width: 100%;
          height: auto;
          border-radius: var(--radius-lg);
          margin: var(--spacing-lg) 0;
          box-shadow: var(--shadow-md);
        }

        .blog-content pre {
          background: var(--black);
          color: var(--text-inverse);
          padding: var(--spacing-md);
          border-radius: var(--radius-md);
          overflow-x: auto;
          margin: var(--spacing-lg) 0;
          font-size: var(--font-size-small);
          line-height: var(--line-height-normal);
        }

        .blog-content code {
          background: var(--bg-light-coral);
          color: var(--text-coral);
          padding: var(--spacing-3xs) var(--spacing-2xs);
          border-radius: var(--radius-sm);
          font-size: var(--font-size-small);
        }

        .blog-content pre code {
          background: none;
          color: inherit;
          padding: 0;
        }

        .blog-content hr {
          border: none;
          height: 1px;
          background: linear-gradient(to right, transparent, var(--border-light), transparent);
          margin: var(--spacing-xl) 0;
        }

        .blog-content table {
          width: 100%;
          border-collapse: collapse;
          margin: var(--spacing-lg) 0;
        }

        .blog-content th,
        .blog-content td {
          padding: var(--spacing-sm);
          text-align: left;
          border-bottom: 1px solid var(--border-light);
        }

        .blog-content th {
          background: var(--bg-cream);
          font-weight: 600;
          color: var(--text-primary);
        }

        .share-button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: var(--radius-circle);
          border: 2px solid var(--border-light);
          background: var(--bg-white);
          color: var(--text-muted);
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .share-button:hover {
          border-color: var(--primary-coral);
          color: var(--text-coral);
          background: var(--bg-light-coral);
        }

        .share-button svg {
          width: 18px;
          height: 18px;
        }
      `}} />

      <section style={{
        padding: '0 var(--spacing-lg) var(--section-padding-md)',
        background: 'var(--bg-white)',
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
        }}>
          {/* Main Content */}
          <article
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: content }}
          />

          {/* Share Buttons - at bottom of article */}
          {showShareButtons && (
            <div style={{
              marginTop: 'var(--spacing-2xl)',
              paddingTop: 'var(--spacing-xl)',
              borderTop: '1px solid var(--border-light)',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-md)',
              }}>
                <span style={{
                  fontSize: 'var(--font-size-small)',
                  fontWeight: 600,
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}>
                  Share this article
                </span>
                <div style={{
                  display: 'flex',
                  gap: 'var(--spacing-xs)',
                }}>
                  <button
                    className="share-button"
                    onClick={() => {
                      if (typeof window !== 'undefined') {
                        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`, '_blank');
                      }
                    }}
                    aria-label="Share on Twitter"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </button>
                  <button
                    className="share-button"
                    onClick={() => {
                      if (typeof window !== 'undefined') {
                        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank');
                      }
                    }}
                    aria-label="Share on LinkedIn"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </button>
                  <button
                    className="share-button"
                    onClick={() => {
                      if (typeof window !== 'undefined' && navigator.clipboard) {
                        navigator.clipboard.writeText(window.location.href);
                      }
                    }}
                    aria-label="Copy link"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export const fields = (
  <ModuleFields>
    <RichTextField
      name="content"
      label="Post Content"
      default={`
<p>Mentorship has long been recognized as one of the most powerful tools for personal and professional development. Now, with the advent of artificial intelligence, we're entering a new era of mentorship that promises to be more accessible, effective, and impactful than ever before.</p>

<h2>The Traditional Mentorship Challenge</h2>

<p>For decades, organizations have struggled with the logistics of running successful mentorship programs. The challenges are numerous:</p>

<ul>
  <li>Matching mentors and mentees effectively based on goals, interests, and personalities</li>
  <li>Scaling programs to reach more participants without sacrificing quality</li>
  <li>Measuring outcomes and demonstrating ROI to stakeholders</li>
  <li>Keeping participants engaged throughout the mentorship journey</li>
</ul>

<blockquote>
  <p>"The best mentorship relationships are built on genuine connection and shared purpose. AI helps us find those connections at scale."</p>
</blockquote>

<h2>How AI is Changing the Game</h2>

<p>Artificial intelligence is addressing these challenges head-on, transforming how organizations approach mentorship in several key ways.</p>

<h3>Intelligent Matching</h3>

<p>Gone are the days of manual spreadsheet matching or random pairings. AI algorithms can analyze hundreds of data points to create optimal mentor-mentee matches based on:</p>

<ul>
  <li>Career goals and aspirations</li>
  <li>Skills and experience levels</li>
  <li>Communication preferences</li>
  <li>Availability and time zones</li>
  <li>Personality compatibility</li>
</ul>

<h3>Conversation Guidance</h3>

<p>AI-powered tools can suggest conversation topics, provide discussion prompts, and help both mentors and mentees make the most of their time together. This is particularly valuable for first-time mentors who may feel uncertain about how to structure their sessions.</p>

<h3>Real-Time Analytics</h3>

<p>Program administrators now have access to dashboards that show engagement levels, progress toward goals, and early warning signs when relationships may need support. This data-driven approach enables proactive intervention before small issues become big problems.</p>

<h2>Looking Ahead</h2>

<p>As AI technology continues to evolve, we can expect even more innovations in the mentorship space. The future holds exciting possibilities for creating more meaningful human connections through intelligent technology.</p>
      `}
    />
    <BooleanField
      name="show_share_buttons"
      label="Show Share Buttons"
      default={true}
    />
    <BooleanField
      name="show_table_of_contents"
      label="Show Table of Contents"
      default={true}
    />
  </ModuleFields>
);

export const meta = {
  label: 'Blog Post Content',
};
