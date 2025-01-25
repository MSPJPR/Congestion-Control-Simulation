let simulationResults = [];

function startSimulation() {
  const bandwidth = document.getElementById("bandwidth").value;
  const packetLoss = document.getElementById("packetLoss").value;

  let output = `Simulation started with:
  - Bandwidth: ${bandwidth} Mbps
  - Packet Loss: ${packetLoss}%`;

  const congestionWindow = Math.max(1, bandwidth - (packetLoss / 100) * bandwidth);
  output += `\nCalculated Congestion Window: ${congestionWindow.toFixed(2)} Mbps`;

  const rtt = Math.random() * 100 + 50; // Random RTT between 50ms and 150ms
  output += `\nSimulated RTT: ${rtt.toFixed(2)} ms`;

  const totalPackets = Math.ceil(bandwidth / 0.15); // Assume 150kb per packet
  output += `\nTotal Packets Sent: ${totalPackets}`;

  document.getElementById("output").innerText = output;

  // Save results for download
  simulationResults.push({ bandwidth, packetLoss, congestionWindow, rtt, totalPackets });

  // Draw graph
  drawGraph(congestionWindow, rtt);
}

function drawGraph(congestionWindow, rtt) {
  const canvas = document.getElementById("graph");
  const ctx = canvas.getContext("2d");

  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw axes
  ctx.beginPath();
  ctx.moveTo(50, 350);
  ctx.lineTo(50, 50);
  ctx.lineTo(550, 350);
  ctx.stroke();

  // Add labels
  ctx.font = "12px Arial";
  ctx.fillText("Congestion Window (Mbps)", 10, 40);
  ctx.fillText("RTT (ms)", 500, 370);

  // Plot point
  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.arc(100 + congestionWindow * 10, 350 - rtt * 2, 5, 0, Math.PI * 2);
  ctx.fill();
}

function downloadResults() {
  const blob = new Blob([JSON.stringify(simulationResults, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "simulation_results.json";
  a.click();

  URL.revokeObjectURL(url);
}
