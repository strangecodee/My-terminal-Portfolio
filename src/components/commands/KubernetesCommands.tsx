import React from "react";
import { kubernetesData, manifestExamples } from "../../data/devopsData";

export const KubectlGetPodsCommand: React.FC = () => {
  return (
    <div className="space-y-3">
      <div className="text-green-400 font-semibold">
        NAME READY STATUS RESTARTS AGE
      </div>
      {kubernetesData.pods.map((pod, index) => (
        <div
          key={index}
          className="font-mono text-sm grid grid-cols-5 gap-4 text-gray-300"
        >
          <span className="text-blue-400">{pod.name}</span>
          <span
            className={
              pod.ready === "1/1" ? "text-green-400" : "text-yellow-400"
            }
          >
            {pod.ready}
          </span>
          <span
            className={
              pod.status === "Running" ? "text-green-400" : "text-red-400"
            }
          >
            {pod.status}
          </span>
          <span
            className={
              pod.restarts === "0" ? "text-gray-400" : "text-orange-400"
            }
          >
            {pod.restarts}
          </span>
          <span className="text-cyan-400">{pod.age}</span>
        </div>
      ))}
      <div className="mt-4 text-gray-500 text-sm">
        💡 Use{" "}
        <code className="text-teal-400">kubectl describe pod &lt;name&gt;</code>{" "}
        for detailed information
      </div>
    </div>
  );
};

export const KubectlGetServicesCommand: React.FC = () => {
  return (
    <div className="space-y-3">
      <div className="text-green-400 font-semibold">
        NAME TYPE CLUSTER-IP EXTERNAL-IP PORT(S) AGE
      </div>
      {kubernetesData.services.map((service, index) => (
        <div
          key={index}
          className="font-mono text-sm grid grid-cols-6 gap-3 text-gray-300"
        >
          <span className="text-blue-400">{service.name}</span>
          <span className="text-purple-400">{service.type}</span>
          <span className="text-yellow-400">{service.clusterIp}</span>
          <span
            className={
              service.externalIp === "<none>"
                ? "text-gray-500"
                : "text-green-400"
            }
          >
            {service.externalIp}
          </span>
          <span className="text-cyan-400">{service.ports}</span>
          <span>{service.age}</span>
        </div>
      ))}
      <div className="mt-4 text-gray-500 text-sm">
        💡 Use{" "}
        <code className="text-teal-400">
          kubectl port-forward service/&lt;name&gt; &lt;port&gt;
        </code>{" "}
        for local access
      </div>
    </div>
  );
};

export const KubectlGetDeploymentsCommand: React.FC = () => {
  return (
    <div className="space-y-3">
      <div className="text-green-400 font-semibold">
        NAME READY UP-TO-DATE AVAILABLE AGE
      </div>
      {kubernetesData.deployments.map((deployment, index) => (
        <div
          key={index}
          className="font-mono text-sm grid grid-cols-5 gap-4 text-gray-300"
        >
          <span className="text-blue-400">{deployment.name}</span>
          <span
            className={
              deployment.ready.includes("/") &&
              deployment.ready.split("/")[0] === deployment.ready.split("/")[1]
                ? "text-green-400"
                : "text-yellow-400"
            }
          >
            {deployment.ready}
          </span>
          <span className="text-cyan-400">{deployment.upToDate}</span>
          <span className="text-green-400">{deployment.available}</span>
          <span>{deployment.age}</span>
        </div>
      ))}
      <div className="mt-4 text-gray-500 text-sm">
        💡 Use{" "}
        <code className="text-teal-400">
          kubectl scale deployment &lt;name&gt; --replicas=&lt;count&gt;
        </code>{" "}
        to scale
      </div>
    </div>
  );
};

export const KubectlDescribePodCommand: React.FC<{ podName?: string }> = ({
  podName = "frontend-deployment-7d4b8c9f6-x8k2m",
}) => {
  return (
    <div className="space-y-2">
      <div className="text-teal-400 font-semibold mb-3">
        📋 Pod Details: {podName}
      </div>
      <div className="space-y-1 text-sm">
        <div>
          <span className="text-yellow-400">Name:</span>{" "}
          <span className="text-gray-300">{podName}</span>
        </div>
        <div>
          <span className="text-yellow-400">Namespace:</span>{" "}
          <span className="text-gray-300">default</span>
        </div>
        <div>
          <span className="text-yellow-400">Priority:</span>{" "}
          <span className="text-gray-300">0</span>
        </div>
        <div>
          <span className="text-yellow-400">Node:</span>{" "}
          <span className="text-gray-300">worker-1/10.0.1.15</span>
        </div>
        <div>
          <span className="text-yellow-400">Start Time:</span>{" "}
          <span className="text-gray-300">Mon, 18 Sep 2023 10:30:00 +0000</span>
        </div>
        <div>
          <span className="text-yellow-400">Labels:</span>{" "}
          <span className="text-gray-300">
            app=frontend, pod-template-hash=7d4b8c9f6
          </span>
        </div>
        <div>
          <span className="text-yellow-400">Status:</span>{" "}
          <span className="text-green-400">Running</span>
        </div>
        <div>
          <span className="text-yellow-400">IP:</span>{" "}
          <span className="text-gray-300">10.244.1.15</span>
        </div>
      </div>

      <div className="mt-4">
        <div className="text-blue-400 font-semibold mb-2">Containers:</div>
        <div className="ml-4 space-y-1 text-sm">
          <div>
            <span className="text-yellow-400">frontend:</span>
          </div>
          <div className="ml-4">
            <div>
              <span className="text-gray-400">Image:</span>{" "}
              <span className="text-gray-300">nginx:1.21</span>
            </div>
            <div>
              <span className="text-gray-400">Port:</span>{" "}
              <span className="text-gray-300">80/TCP</span>
            </div>
            <div>
              <span className="text-gray-400">State:</span>{" "}
              <span className="text-green-400">Running</span>
            </div>
            <div>
              <span className="text-gray-400">Ready:</span>{" "}
              <span className="text-green-400">True</span>
            </div>
            <div>
              <span className="text-gray-400">Restart Count:</span>{" "}
              <span className="text-gray-300">0</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="text-blue-400 font-semibold mb-2">Events:</div>
        <div className="ml-4 space-y-1 text-sm text-gray-300">
          <div>
            Normal Scheduled 2d Successfully assigned default/{podName} to
            worker-1
          </div>
          <div>
            Normal Pulled 2d Container image "nginx:1.21" already present on
            machine
          </div>
          <div>Normal Created 2d Created container frontend</div>
          <div>Normal Started 2d Started container frontend</div>
        </div>
      </div>
    </div>
  );
};

export const KubectlApplyCommand: React.FC<{ manifest?: string }> = ({
  manifest = "deployment.yaml",
}) => {
  return (
    <div className="space-y-3">
      <div className="text-teal-400 font-semibold mb-3">
        📄 Applying Kubernetes manifest: {manifest}
      </div>
      <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
        <pre className="text-xs text-gray-300 whitespace-pre-wrap">
          {manifestExamples.kubernetesDeployment}
        </pre>
      </div>
      <div className="space-y-1 text-sm">
        <div className="text-green-400">
          ✅ deployment.apps/nginx-deployment created
        </div>
        <div className="text-blue-400">
          🔄 Waiting for deployment to be ready...
        </div>
        <div className="text-green-400">
          ✅ deployment "nginx-deployment" successfully rolled out
        </div>
      </div>
      <div className="mt-4 text-gray-500 text-sm">
        💡 Use{" "}
        <code className="text-teal-400">kubectl get pods -l app=nginx</code> to
        check pod status
      </div>
    </div>
  );
};
