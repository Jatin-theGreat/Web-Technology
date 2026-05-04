import { useState, useEffect } from 'react';
import './TelemetryDashboard.css';

const TelemetryDashboard = () => {
  const [telemetry, setTelemetry] = useState({
    status: 'Standby',
    altitude: 0,
    speed: 0,
    battery: 100,
    temperature: 35,
    signalStrength: 100
  });

  useEffect(() => {
    let interval;

    if (telemetry.status === 'In Flight') {
      interval = setInterval(() => {
        setTelemetry(prev => {
          const newTemp = prev.temperature + (Math.random() * 2 - 0.8);
          const newBattery = prev.battery - 0.1;

          return {
            ...prev,
            altitude: Math.max(0, prev.altitude + (Math.random() * 10 - 4)),
            speed: Math.max(0, prev.speed + (Math.random() * 5 - 2)),
            temperature: newTemp,
            battery: Math.max(0, newBattery),
            signalStrength: prev.altitude > 100 ? 85 : 98
          };
        });
      }, 500);
    }

    return () => clearInterval(interval);
  }, [telemetry.status]);

  const handleLaunch = () => {
    setTelemetry(prev => ({ ...prev, status: 'In Flight', altitude: 2, speed: 10 }));
  };

  const handleLand = () => {
    setTelemetry(prev => ({ ...prev, status: 'Landing Protocol...', altitude: 0, speed: 0 }));
    setTimeout(() => {
      setTelemetry(prev => ({ ...prev, status: 'Standby' }));
    }, 2000);
  };

  const getTempClass = (temp) => temp > 75 ? 'danger text-blink' : 'safe';
  const getBatteryClass = (batt) => batt < 20 ? 'danger text-blink' : 'safe';

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h2>UAV Ground Control Station</h2>
        <div className={`status-badge ${telemetry.status === 'In Flight' ? 'active' : ''}`}>
          {telemetry.status}
        </div>
      </header>

      <div className="telemetry-grid">
        <div className="data-card">
          <h4>Altitude</h4>
          <div className="value">{telemetry.altitude.toFixed(1)} <span className="unit">m</span></div>
        </div>
        <div className="data-card">
          <h4>Air Speed</h4>
          <div className="value">{telemetry.speed.toFixed(1)} <span className="unit">m/s</span></div>
        </div>
        <div className="data-card">
          <h4>Core Temp</h4>
          <div className={`value ${getTempClass(telemetry.temperature)}`}>
            {telemetry.temperature.toFixed(1)} <span className="unit">°C</span>
          </div>
        </div>
        <div className="data-card">
          <h4>Battery Level</h4>
          <div className={`value ${getBatteryClass(telemetry.battery)}`}>
            {telemetry.battery.toFixed(1)} <span className="unit">%</span>
          </div>
        </div>
      </div>

      <div className="controls">
        <button
          className="btn-launch"
          onClick={handleLaunch}
          disabled={telemetry.status === 'In Flight'}
        >
          Initiate Launch
        </button>
        <button
          className="btn-land"
          onClick={handleLand}
          disabled={telemetry.status !== 'In Flight'}
        >
          Emergency Land
        </button>
      </div>

      <div className="log-console">
        <h4>System Logs</h4>
        <p>[SYS] Connection established on port 8080.</p>
        <p>[SYS] Calibrating gyroscope... OK.</p>
        <p>[{telemetry.status}] Signal strength at {telemetry.signalStrength}%.</p>
      </div>
    </div>
  );
};

export default TelemetryDashboard;