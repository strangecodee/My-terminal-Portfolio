import React from "react";
import { terraformData, manifestExamples } from "../../data/devopsData";

export const TerraformPlanCommand: React.FC = () => {
  return (
    <div className="space-y-3">
      <div className="text-teal-400 font-semibold mb-3">🏗️ Terraform Plan</div>
      <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700 overflow-x-auto">
        <pre className="text-xs text-gray-300 whitespace-pre-wrap">
          {terraformData.planOutput}
        </pre>
      </div>
      <div className="flex items-center space-x-4 text-sm">
        <span className="text-green-400">✅ Plan: 1 to add</span>
        <span className="text-yellow-400">🔄 0 to change</span>
        <span className="text-red-400">❌ 0 to destroy</span>
      </div>
      <div className="mt-4 text-gray-500 text-sm">
        💡 Use <code className="text-teal-400">terraform apply</code> to execute
        this plan
      </div>
    </div>
  );
};

export const TerraformApplyCommand: React.FC = () => {
  const applySteps = [
    "Terraform used the selected providers to generate the following execution plan.",
    "",
    "Do you want to perform these actions?",
    "  Terraform will perform the actions described above.",
    "  Only 'yes' will be accepted to approve.",
    "",
    "  Enter a value: yes",
    "",
    "aws_instance.web_server: Creating...",
    "aws_instance.web_server: Still creating... [10s elapsed]",
    "aws_instance.web_server: Still creating... [20s elapsed]",
    "aws_instance.web_server: Creation complete after 24s [id=i-0123456789abcdef0]",
    "",
    "Apply complete! Resources: 1 added, 0 changed, 0 destroyed.",
    "",
    "Outputs:",
    "",
    'instance_ip = "203.0.113.12"',
    'instance_id = "i-0123456789abcdef0"',
  ];

  return (
    <div className="space-y-2">
      <div className="text-teal-400 font-semibold mb-3">🚀 Terraform Apply</div>
      {applySteps.map((step, index) => (
        <div
          key={index}
          className={`font-mono text-sm ${
            step.includes("Creating") || step.includes("Still creating")
              ? "text-yellow-400"
              : step.includes("Creation complete")
              ? "text-green-400"
              : step.includes("Apply complete")
              ? "text-green-400 font-semibold"
              : step.includes("Outputs:")
              ? "text-blue-400 font-semibold"
              : step.includes("=") &&
                (step.includes("instance_ip") || step.includes("instance_id"))
              ? "text-cyan-400"
              : "text-gray-300"
          }`}
        >
          {step || "\u00A0"}
        </div>
      ))}
      <div className="mt-4 text-gray-500 text-sm">
        ✅ Infrastructure successfully provisioned! Use{" "}
        <code className="text-teal-400">terraform show</code> to view state
      </div>
    </div>
  );
};

export const TerraformDestroyCommand: React.FC = () => {
  const destroySteps = [
    "Terraform used the selected providers to generate the following execution plan.",
    "",
    "The following actions will be performed:",
    "",
    "  # aws_instance.web_server will be destroyed",
    '  - resource "aws_instance" "web_server" {',
    '      - ami                    = "ami-0c55b159cbfafe1d0" -> null',
    '      - instance_type          = "t3.micro" -> null',
    '      - id                     = "i-0123456789abcdef0" -> null',
    "      # (28 unchanged attributes hidden)",
    "    }",
    "",
    "Plan: 0 to add, 0 to change, 1 to destroy.",
    "",
    "Do you really want to destroy all resources?",
    "  Enter a value: yes",
    "",
    "aws_instance.web_server: Destroying... [id=i-0123456789abcdef0]",
    "aws_instance.web_server: Still destroying... [id=i-0123456789abcdef0, 10s elapsed]",
    "aws_instance.web_server: Destruction complete after 15s",
    "",
    "Destroy complete! Resources: 1 destroyed.",
  ];

  return (
    <div className="space-y-2">
      <div className="text-teal-400 font-semibold mb-3">
        💥 Terraform Destroy
      </div>
      {destroySteps.map((step, index) => (
        <div
          key={index}
          className={`font-mono text-sm ${
            step.includes("will be destroyed")
              ? "text-red-400"
              : step.includes("Destroying") || step.includes("Still destroying")
              ? "text-yellow-400"
              : step.includes("Destruction complete")
              ? "text-red-400"
              : step.includes("Destroy complete")
              ? "text-red-400 font-semibold"
              : step.includes("Plan:")
              ? "text-orange-400"
              : step.startsWith("  -") || step.startsWith("      -")
              ? "text-red-300"
              : "text-gray-300"
          }`}
        >
          {step || "\u00A0"}
        </div>
      ))}
      <div className="mt-4 text-gray-500 text-sm">
        ⚠️ All resources destroyed! Use{" "}
        <code className="text-teal-400">terraform plan</code> to recreate
        infrastructure
      </div>
    </div>
  );
};

export const TerraformStateListCommand: React.FC = () => {
  return (
    <div className="space-y-3">
      <div className="text-teal-400 font-semibold mb-3">
        📋 Terraform State Resources
      </div>
      {terraformData.stateList.map((resource, index) => (
        <div
          key={index}
          className="font-mono text-sm flex items-center space-x-3 text-gray-300 hover:bg-gray-800/30 p-2 rounded"
        >
          <span className="text-blue-400">📦</span>
          <span className="text-cyan-400">{resource}</span>
        </div>
      ))}
      <div className="mt-4 text-gray-500 text-sm">
        💡 Use{" "}
        <code className="text-teal-400">
          terraform state show &lt;resource&gt;
        </code>{" "}
        to view resource details
      </div>
    </div>
  );
};

export const TerraformValidateCommand: React.FC = () => {
  return (
    <div className="space-y-3">
      <div className="text-teal-400 font-semibold mb-3">
        ✅ Terraform Validate
      </div>
      <div className="bg-gray-800/30 p-4 rounded-lg border border-gray-700">
        <div className="text-green-400 font-semibold mb-2">
          Success! The configuration is valid.
        </div>
        <div className="text-sm text-gray-300 space-y-1">
          <div>✓ Configuration syntax is correct</div>
          <div>✓ All required providers are available</div>
          <div>✓ Resource references are valid</div>
          <div>✓ Variable types are consistent</div>
        </div>
      </div>
      <div className="mt-4 text-gray-500 text-sm">
        💡 Configuration is ready for{" "}
        <code className="text-teal-400">terraform plan</code>
      </div>
    </div>
  );
};

export const TerraformShowConfigCommand: React.FC = () => {
  return (
    <div className="space-y-3">
      <div className="text-teal-400 font-semibold mb-3">
        📄 Terraform Configuration
      </div>
      <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700 overflow-x-auto">
        <pre className="text-xs text-gray-300 whitespace-pre-wrap">
          {manifestExamples.terraformMain}
        </pre>
      </div>
      <div className="mt-4 text-gray-500 text-sm">
        💡 This is your current Terraform configuration. Use{" "}
        <code className="text-teal-400">terraform plan</code> to see what
        changes will be made
      </div>
    </div>
  );
};
