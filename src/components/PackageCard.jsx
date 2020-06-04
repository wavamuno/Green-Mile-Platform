import React from "react";

export default function PackageCard({_package,onDragStart, movePackageToNext}) {
  return <div id={_package.id} onDragStart={(e)=>onDragStart(e)} draggable="true" className="package-card">
  <div className="tags"></div>
  <div className="package-wrapper">
    <h5>#<span className="id">{_package.id} </span><span>{_package.name}</span></h5>
  </div>
  <div className="package-btns">
    <button onClick={(e)=>movePackageToNext(e,_package.id)} className="move-card"><i className="fa fa-arrow-right" aria-hidden="true"></i>Next</button>
  </div>
  </div>;
}