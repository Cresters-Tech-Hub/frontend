import React from "react";

interface IMetrics {
    title: string;
    width: number;
    color: string;
}

const Metrics = ({ title, width, color }: IMetrics) => {
    return (
        <div className="uploaded">
            <div className="title">{title}</div>
            <div className="progress_container">
                <div className="progress">
                    <span
                        style={{
                            width: `${width.toString() + "%"}`,
                            background: color
                        }}
                    ></span>
                </div>
                <div className="value">{width}%</div>
            </div>
        </div>
    );
};

export default Metrics;
