import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiCircleOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.16 10.406a.75.75 0 0 0-.75.75v9.77a.75.75 0 0 0 1.5 0v-9.77a.75.75 0 0 0-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.26 10.406a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m-2-.5a2 2 0 1 0 4 0 2 2 0 0 0-4 0M16.8 13.427a.75.75 0 0 0-1.016.306l-1.393 2.595a.75.75 0 0 0-.09.355v3.724a.75.75 0 1 0 1.5 0v-3.535l1.305-2.43a.75.75 0 0 0-.306-1.015"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.137 13.541a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m-2-.5a2 2 0 1 0 4 0 2 2 0 0 0-4 0M7.2 13.369a.75.75 0 0 1 1.016.306l1.393 2.595a.75.75 0 0 1 .09.355v3.723a.75.75 0 0 1-1.5 0v-3.535l-1.305-2.429A.75.75 0 0 1 7.2 13.37"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.863 13.484a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2-.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAiCircleOutline;
