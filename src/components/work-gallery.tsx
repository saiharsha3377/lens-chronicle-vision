import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { works, type Work, type WorkCategory } from "@/lib/portfolio";

const filters: Array<"All" | WorkCategory> = ["All", "Fashion", "Editorial", "Commercial"];

export function WorkGallery({ limit }: { limit?: number }) {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [activeWork, setActiveWork] = useState<Work | null>(null);
  const visible = useMemo(() => {
    const filtered = filter === "All" ? works : works.filter((work) => work.category === filter);
    return typeof limit === "number" ? filtered.slice(0, limit) : filtered;
  }, [filter, limit]);

  return (
    <>
      {!limit && (
        <div className="filter-bar" aria-label="Filter photography by category">
          {filters.map((item) => (
            <Button key={item} variant="ghost" className={filter === item ? "filter-active" : ""} onClick={() => setFilter(item)} aria-pressed={filter === item}>
              {item}<span>{String(item === "All" ? works.length : works.filter((work) => work.category === item).length).padStart(2, "0")}</span>
            </Button>
          ))}
        </div>
      )}
      <div className="work-grid" aria-live="polite">
        {visible.map((work, index) => (
          <Button className={`work-item work-${work.shape}`} variant="ghost" type="button" key={work.title} onClick={() => setActiveWork(work)} aria-label={`View ${work.title} in full screen`}>
            <span className="work-image"><img src={work.src} alt={work.alt} width="1600" height="2400" loading={index < 2 ? "eager" : "lazy"} fetchPriority={index === 0 ? "high" : "auto"} decoding="async" /></span>
            <span className="work-meta"><b>{String(index + 1).padStart(2, "0")}</b><span>{work.title}</span><small>{work.category}</small></span>
          </Button>
        ))}
      </div>
      <Dialog open={Boolean(activeWork)} onOpenChange={(open) => { if (!open) setActiveWork(null); }}>
        <DialogContent className="work-dialog">
          <DialogTitle>{activeWork?.title}</DialogTitle>
          <DialogDescription>{activeWork?.category} photography</DialogDescription>
          {activeWork && <img src={activeWork.src} alt={activeWork.alt} width="1600" height="2400" decoding="async" />}
        </DialogContent>
      </Dialog>
    </>
  );
}