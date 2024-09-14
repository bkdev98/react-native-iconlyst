import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudPrivacyOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.847 5.044c.898-1.186 2.334-2.134 4.403-2.134 2.07 0 3.505.948 4.403 2.134a6.35 6.35 0 0 1 1.187 2.807c1.04.131 1.993.558 2.73 1.263.902.865 1.43 2.102 1.43 3.585a4.89 4.89 0 0 1-2.878 4.458.75.75 0 0 1-.617-1.367A3.39 3.39 0 0 0 20.5 12.7c0-1.114-.387-1.946-.968-2.503-.586-.561-1.419-.888-2.386-.889a.75.75 0 0 1-.749-.75c0-.659-.27-1.723-.94-2.609-.647-.854-1.66-1.539-3.207-1.539s-2.56.685-3.207 1.54c-.67.885-.94 1.95-.94 2.608a.75.75 0 0 1-.743.75c-.97.009-1.805.337-2.392.897C4.388 10.76 4 11.587 4 12.7c0 1.374.817 2.559 1.995 3.09a.75.75 0 0 1-.617 1.368A4.89 4.89 0 0 1 2.5 12.699c0-1.484.529-2.716 1.432-3.579.737-.703 1.69-1.128 2.727-1.264a6.35 6.35 0 0 1 1.188-2.812"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.872 12.792c.098-.021.242-.05.378-.05.135 0 .28.028.378.05.116.025.248.06.385.1.276.078.601.183.918.295.316.111.634.232.893.344.129.055.253.112.358.167.078.04.234.124.354.245.132.133.247.3.31.537.049.186.056.387.057.57q0 .235-.007.604l-.004.19c-.006.342-.012.78-.012 1.35 0 1.543-.934 2.56-1.752 3.148a6.3 6.3 0 0 1-1.61.83l-.034.01-.01.004h-.004l-.001.001s-.002 0-.219-.717l-.218.718-.002-.001-.004-.001-.01-.004-.034-.01-.111-.04a6.302 6.302 0 0 1-1.499-.79c-.818-.589-1.752-1.605-1.752-3.148 0-.57-.006-1.009-.012-1.351l-.004-.192a25 25 0 0 1-.007-.601c.001-.183.008-.385.057-.57.063-.238.179-.405.312-.54.12-.119.275-.201.353-.242.105-.055.228-.112.357-.167.26-.11.577-.232.893-.343s.642-.218.918-.296c.137-.04.27-.074.385-.1m.378 7.678-.218.718a.75.75 0 0 0 .435 0zm0-.798-.147-.062a5 5 0 0 1-.854-.485c-.623-.448-1.129-1.07-1.129-1.93 0-.583-.006-1.031-.012-1.38l-.004-.205a24 24 0 0 1-.006-.624q.071-.034.169-.076a15.195 15.195 0 0 1 1.632-.576 5 5 0 0 1 .351-.088l.057.011q.113.025.294.077c.24.068.536.164.831.268.296.104.581.213.8.307q.1.043.17.076l.001.077c.001.135-.002.308-.007.552l-.003.202c-.007.348-.013.796-.013 1.378 0 .861-.506 1.483-1.128 1.93a4.8 4.8 0 0 1-1.002.548"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloudPrivacyOutline;
