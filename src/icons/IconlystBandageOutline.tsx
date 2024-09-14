import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBandageOutline = ({
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
      d="M16.984 21.753a5 5 0 0 1-3.547-1.468L3.974 10.82a5.02 5.02 0 1 1 7.1-7.1l9.464 9.464a5.016 5.016 0 0 1-3.549 8.565zm-2.487-2.529a3.6 3.6 0 0 0 4.976 0 3.52 3.52 0 0 0 0-4.975L10.01 4.784a3.6 3.6 0 0 0-4.975 0 3.524 3.524 0 0 0 0 4.976z"
    />
    <Path
      fill={props.color}
      d="M13.359 15.484a1.31 1.31 0 0 1-.934-.387l-3.283-3.282a1.32 1.32 0 0 1 0-1.868l1.054-1.054a1.325 1.325 0 0 1 1.867 0l3.284 3.284a1.32 1.32 0 0 1 0 1.867l-1.055 1.053a1.3 1.3 0 0 1-.932.388zM10.33 10.88l3.03 3.028.8-.8-3.028-3.03zM18.292 12.757a.75.75 0 0 1-.532-1.28l1.707-1.717A3.5 3.5 0 0 0 20.5 7.274a3.525 3.525 0 0 0-3.506-3.52h-.006a3.5 3.5 0 0 0-2.49 1.034l-1.72 1.708a.75.75 0 1 1-1.056-1.064l1.718-1.706a4.99 4.99 0 0 1 3.548-1.472h.01a5.018 5.018 0 0 1 3.533 8.565l-1.706 1.717a.75.75 0 0 1-.532.22M7.519 21.748a5.01 5.01 0 0 1-3.552-8.561l1.722-1.71a.75.75 0 0 1 1.056 1.064l-1.718 1.706a3.524 3.524 0 0 0 4.987 4.979l1.7-1.714a.75.75 0 0 1 1.064 1.056l-1.706 1.718a5.03 5.03 0 0 1-3.553 1.462"
    />
  </Svg>
);
export default IconlystBandageOutline;
