import {
  IpluginDetails,
  IpluginInputArgs,
  IpluginOutputArgs,
} from '../../../../FlowHelpers/1.0.0/interfaces/interfaces';

/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
const details = (): IpluginDetails => ({
  name: 'Check Video Color Histograph Hash',
  description: 'Check to ensure that the video file has the correct color hash for a given video file',
  style: {
    borderColor: 'orange',
  },
  tags: 'video',
  isStartPlugin: false,
  pType: '',
  requiresVersion: '2.11.01',
  sidebarPosition: -1,
  icon: 'faQuestion',
  inputs: [

  ],
  outputs: [
    {
      number: 1,
      tooltip: 'File has correct histograph',
    },
    {
      number: 2,
      tooltip: 'File does not have correct histograph',
    },
    {
      number: 3,
      tooltip: 'File does not have histograph assosicated with it',
    },
  ],
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const plugin = (args: IpluginInputArgs): IpluginOutputArgs => {
  const lib = require('../../../../../methods/lib')();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars,no-param-reassign
  args.inputs = lib.loadDefaultValues(args.inputs, details);

  let isWithinRange = false;

  const greaterThanFps = Number(args.inputs.greaterThan);
  const lessThanFps = Number(args.inputs.lessThan);

  const VideoFrameRate = args.inputFileObj?.meta?.VideoFrameRate;

  if (VideoFrameRate) {
    if (VideoFrameRate >= greaterThanFps && VideoFrameRate <= lessThanFps) {
      isWithinRange = true;
    }
  } else {
    throw new Error('Video framerate not found');
  }

  if (isWithinRange) {
    args.jobLog(`Video framerate of ${VideoFrameRate} is within range of ${greaterThanFps} and ${lessThanFps}`);
  } else {
    args.jobLog(`Video framerate of ${VideoFrameRate} is not within range of ${greaterThanFps} and ${lessThanFps}`);
  }

  return {
    outputFileObj: args.inputFileObj,
    outputNumber: isWithinRange ? 1 : 2,
    variables: args.variables,
  };
};

const getTVDBHistographHash = () => {
  const hash = '';
  return { hash };
};
const getVideoHistographHash = () => {
  const hash = '';
  return { hash };
};

const generateVideoHistographHash = () => {
  const hash = '';
  return { hash };
};
// Note to self: use endless 8 from Haruhi anime as potential tests for false poisitive/false negative honing
const generateVideoHistograph = () => {
  const Histograph = '';
  return { Histograph };
};
export {
  details,
  plugin,
};
