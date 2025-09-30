import React from "react";
import { awsData } from "../../data/devopsData";

export const AwsS3LsCommand: React.FC = () => {
  return (
    <div className="space-y-3">
      <div className="text-teal-400 font-semibold mb-3">☁️ S3 Buckets</div>
      {awsData.s3Buckets.map((bucket, index) => (
        <div
          key={index}
          className="font-mono text-sm flex justify-between items-center text-gray-300 hover:bg-gray-800/30 p-2 rounded"
        >
          <div className="flex items-center space-x-4">
            <span className="text-blue-400">🪣</span>
            <span className="text-cyan-400">{bucket.name}</span>
          </div>
          <div className="flex items-center space-x-4 text-sm">
            <span className="text-gray-400">{bucket.creationDate}</span>
            <span className="text-yellow-400">{bucket.region}</span>
          </div>
        </div>
      ))}
      <div className="mt-4 text-gray-500 text-sm">
        💡 Use{" "}
        <code className="text-teal-400">
          aws s3 ls s3://&lt;bucket-name&gt;
        </code>{" "}
        to list bucket contents
      </div>
    </div>
  );
};

export const AwsEc2DescribeInstancesCommand: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="text-teal-400 font-semibold mb-3">🖥️ EC2 Instances</div>
      {awsData.ec2Instances.map((instance, index) => (
        <div
          key={index}
          className="bg-gray-800/30 p-4 rounded-lg border border-gray-700 space-y-2"
        >
          <div className="flex justify-between items-center">
            <span className="text-blue-400 font-semibold">
              {instance.instanceId}
            </span>
            <span
              className={`px-2 py-1 rounded text-xs font-semibold ${
                instance.state === "running"
                  ? "bg-green-500/20 text-green-400"
                  : "bg-red-500/20 text-red-400"
              }`}
            >
              {instance.state.toUpperCase()}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-400">Type:</span>{" "}
              <span className="text-yellow-400">{instance.instanceType}</span>
            </div>
            <div>
              <span className="text-gray-400">Launch Time:</span>{" "}
              <span className="text-gray-300">
                {new Date(instance.launchTime).toLocaleString()}
              </span>
            </div>
            <div>
              <span className="text-gray-400">Public IP:</span>{" "}
              <span className="text-cyan-400">
                {instance.publicIp || "N/A"}
              </span>
            </div>
            <div>
              <span className="text-gray-400">Private IP:</span>{" "}
              <span className="text-purple-400">{instance.privateIp}</span>
            </div>
          </div>
        </div>
      ))}
      <div className="mt-4 text-gray-500 text-sm">
        💡 Use{" "}
        <code className="text-teal-400">
          aws ec2 start-instances --instance-ids &lt;id&gt;
        </code>{" "}
        to start stopped instances
      </div>
    </div>
  );
};

export const AwsLambdaListFunctionsCommand: React.FC = () => {
  return (
    <div className="space-y-3">
      <div className="text-teal-400 font-semibold mb-3">
        ⚡ Lambda Functions
      </div>
      {awsData.lambdaFunctions.map((func, index) => (
        <div
          key={index}
          className="bg-gray-800/30 p-3 rounded-lg border border-gray-700"
        >
          <div className="flex justify-between items-center mb-2">
            <span className="text-blue-400 font-semibold">
              {func.functionName}
            </span>
            <span className="text-yellow-400 text-sm">{func.runtime}</span>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
            <div>
              <span className="text-gray-400">Last Modified:</span>{" "}
              {new Date(func.lastModified).toLocaleString()}
            </div>
            <div>
              <span className="text-gray-400">Code Size:</span>{" "}
              <span className="text-cyan-400">
                {(func.codeSize / 1024 / 1024).toFixed(2)} MB
              </span>
            </div>
          </div>
        </div>
      ))}
      <div className="mt-4 text-gray-500 text-sm">
        💡 Use{" "}
        <code className="text-teal-400">
          aws lambda invoke --function-name &lt;name&gt; output.json
        </code>{" "}
        to test functions
      </div>
    </div>
  );
};

export const AwsIamListUsersCommand: React.FC = () => {
  const users = [
    {
      userName: "admin-user",
      userId: "AIDACKCEVSQ6C2EXAMPLE",
      arn: "arn:aws:iam::123456789012:user/admin-user",
      createDate: "2023-08-15T10:30:00Z",
    },
    {
      userName: "developer",
      userId: "AIDACKCEVSQ6C3EXAMPLE",
      arn: "arn:aws:iam::123456789012:user/developer",
      createDate: "2023-09-01T14:20:00Z",
    },
    {
      userName: "ci-cd-user",
      userId: "AIDACKCEVSQ6C4EXAMPLE",
      arn: "arn:aws:iam::123456789012:user/ci-cd-user",
      createDate: "2023-07-22T09:15:00Z",
    },
  ];

  return (
    <div className="space-y-3">
      <div className="text-teal-400 font-semibold mb-3">👥 IAM Users</div>
      {users.map((user, index) => (
        <div
          key={index}
          className="bg-gray-800/30 p-3 rounded-lg border border-gray-700 space-y-1"
        >
          <div className="flex justify-between items-center">
            <span className="text-blue-400 font-semibold">{user.userName}</span>
            <span className="text-gray-400 text-xs">
              {new Date(user.createDate).toLocaleString()}
            </span>
          </div>
          <div className="text-sm text-gray-300">
            <div>
              <span className="text-gray-400">User ID:</span> {user.userId}
            </div>
            <div>
              <span className="text-gray-400">ARN:</span>{" "}
              <span className="text-purple-400">{user.arn}</span>
            </div>
          </div>
        </div>
      ))}
      <div className="mt-4 text-gray-500 text-sm">
        💡 Use{" "}
        <code className="text-teal-400">
          aws iam list-attached-user-policies --user-name &lt;name&gt;
        </code>{" "}
        to see user permissions
      </div>
    </div>
  );
};

export const AwsCloudFormationListStacksCommand: React.FC = () => {
  const stacks = [
    {
      stackName: "web-application-stack",
      stackStatus: "CREATE_COMPLETE",
      creationTime: "2023-09-15T10:30:00Z",
      templateDescription: "Web application infrastructure",
    },
    {
      stackName: "database-stack",
      stackStatus: "UPDATE_COMPLETE",
      creationTime: "2023-08-20T14:20:00Z",
      templateDescription: "RDS database and related resources",
    },
    {
      stackName: "monitoring-stack",
      stackStatus: "CREATE_COMPLETE",
      creationTime: "2023-09-10T09:15:00Z",
      templateDescription: "CloudWatch monitoring and alerting",
    },
  ];

  return (
    <div className="space-y-3">
      <div className="text-teal-400 font-semibold mb-3">
        📚 CloudFormation Stacks
      </div>
      {stacks.map((stack, index) => (
        <div
          key={index}
          className="bg-gray-800/30 p-3 rounded-lg border border-gray-700"
        >
          <div className="flex justify-between items-center mb-2">
            <span className="text-blue-400 font-semibold">
              {stack.stackName}
            </span>
            <span
              className={`px-2 py-1 rounded text-xs font-semibold ${
                stack.stackStatus.includes("COMPLETE")
                  ? "bg-green-500/20 text-green-400"
                  : stack.stackStatus.includes("PROGRESS")
                  ? "bg-yellow-500/20 text-yellow-400"
                  : "bg-red-500/20 text-red-400"
              }`}
            >
              {stack.stackStatus}
            </span>
          </div>
          <div className="text-sm text-gray-300">
            <div>
              <span className="text-gray-400">Created:</span>{" "}
              {new Date(stack.creationTime).toLocaleString()}
            </div>
            <div>
              <span className="text-gray-400">Description:</span>{" "}
              {stack.templateDescription}
            </div>
          </div>
        </div>
      ))}
      <div className="mt-4 text-gray-500 text-sm">
        💡 Use{" "}
        <code className="text-teal-400">
          aws cloudformation describe-stacks --stack-name &lt;name&gt;
        </code>{" "}
        for detailed information
      </div>
    </div>
  );
};
