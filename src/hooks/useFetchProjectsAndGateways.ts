import { useState, useEffect } from 'react';
import api from 'api';
import { ProjectsInterface, GatewaysInterface } from 'interfaces';

export function useFetchProjectsAndGateways() {

  const [projects, setProjects] = useState<ProjectsInterface[]>([]);
  const [gateways, setGateways] = useState<GatewaysInterface[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const [projectsData, gatewaysData] = await Promise.all([
        api.getMockData('projects'),
        api.getMockData('gateways')
      ]);
      setProjects(projectsData);
      setGateways(gatewaysData);
    }

    fetchData();
  }, []);

  return [projects, gateways] as const;
}