import React, { useEffect, useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { ExternalLink } from "lucide-react";
export default function PieChart({
  pieData,
  wantAction,
  wrapperStyle,
  pieStyle,
}) {
  console.warn(pieData);
  const [pieDataState, setPieData] = useState(pieData);
  useEffect(()=>{
      if (!pieData || pieData === undefined) {
        setPieData({
          FAT: {
            quantity: 70,
          },
          PROCNT: {
            quantity: 50,
          },
          CHOCDF: {
            quantity: 260,
          },
        });
      }
  }, [])
  console.warn(pieData, pieDataState)

  return (
    pieDataState && <div className={`${wrapperStyle}`}>
      <div className={`${pieStyle}`}>
        <Doughnut
          // options = {data}
          data={{
            labels: ["Fat", "Protein", "Carbs"],
            datasets: [
              {
                label: "Nutrients",
                data: [
                  pieDataState.FAT.quantity,
                  pieDataState.PROCNT.quantity,
                  pieDataState.CHOCDF.quantity,
                ],
                backgroundColor: ["#ff8f92", "#ffe773", "#0da7d5c7"],
                borderColor: ["#ff5a5f", "#ffd817", "#0da7d5"],
                hoverOffset: 4,
              },
            ],
          }}
          // {...props}
        />
      </div>
      {wantAction == true ? (
        <a
          variant="outline"
          className="text-sm text-muted-foreground text-primary flex item-center p-0"
        >
          Set Intake <ExternalLink className="w-[14px] h-[14px] ml-1" />
        </a>
      ) : (
        ""
      )}
    </div>
  );
}
