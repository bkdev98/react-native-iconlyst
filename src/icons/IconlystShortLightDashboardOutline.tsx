import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShortLightDashboardOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.976 9.817a.75.75 0 0 1-.545.91l-2.001.5a.75.75 0 0 1-.364-1.455l2-.5a.75.75 0 0 1 .91.545M9.976 12.318a.75.75 0 0 1-.545.91l-2.001.5a.75.75 0 0 1-.364-1.455l2-.5a.75.75 0 0 1 .91.545"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 4.246a8.254 8.254 0 1 0 0 16.508 8.254 8.254 0 0 0 0-16.508m0-1.5c-5.387 0-9.754 4.367-9.754 9.754s4.367 9.754 9.754 9.754 9.754-4.367 9.754-9.754-4.367-9.754-9.754-9.754"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.976 14.82a.75.75 0 0 1-.545.909l-2.001.5a.75.75 0 1 1-.364-1.455l2-.5a.75.75 0 0 1 .91.545"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M13.58 17.34c-.71 0-1.32-.37-1.73-1.04-.29-.48-.49-1.02-.64-1.72-.13-.61-.19-1.26-.21-2.12v-.04c.03-.89.11-1.94.49-2.96.17-.46.38-.83.64-1.13.41-.47.95-.72 1.56-.68.74.03 1.46.22 2.19.59a4.6 4.6 0 0 1 2.02 1.98c.81 1.5.8 3.09-.03 4.61-.49.91-1.25 1.6-2.26 2.06-.54.25-1.15.39-1.87.45h-.17zm-1.08-4.89c.02.75.08 1.31.18 1.83.11.52.25.92.45 1.24s.37.34.5.32c.55-.04.98-.14 1.36-.31.71-.33 1.22-.79 1.56-1.41.59-1.08.59-2.12.02-3.18-.33-.61-.78-1.05-1.37-1.35-.53-.27-1.05-.41-1.57-.43-.17 0-.26.04-.37.17-.14.17-.26.37-.36.66-.3.82-.37 1.71-.39 2.47z"
    />
  </Svg>
);
export default IconlystShortLightDashboardOutline;
