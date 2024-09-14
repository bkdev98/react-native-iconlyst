import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSmilingCloseOutline = ({
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
      d="M12.25 3.75a8.25 8.25 0 1 0 0 16.5A8.25 8.25 0 0 0 20.5 12a.75.75 0 0 1 1.5 0c0 5.385-4.365 9.75-9.75 9.75S2.5 17.385 2.5 12a9.75 9.75 0 0 1 9.75-9.75.75.75 0 0 1 0 1.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.382 3.423a.75.75 0 0 1 0 1.06l-.98.98.978.979a.75.75 0 1 1-1.06 1.06l-.979-.978-.983.983a.75.75 0 0 1-1.06-1.06l.983-.984-.98-.979a.75.75 0 0 1 1.06-1.06l.98.979.98-.98a.75.75 0 0 1 1.06 0M8.913 13.694a.75.75 0 0 1 1.052.138c.576.75 1.399 1.189 2.285 1.189s1.71-.439 2.285-1.189a.75.75 0 0 1 1.19.914c-.825 1.075-2.069 1.775-3.475 1.775s-2.65-.7-3.475-1.775a.75.75 0 0 1 .138-1.052"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M9.163 11a.976.976 0 0 1-.002-1.95.975.975 0 1 1 0 1.95zM15.663 11a.976.976 0 0 1-.002-1.95.975.975 0 0 1 0 1.95z"
    />
  </Svg>
);
export default IconlystSmilingCloseOutline;
