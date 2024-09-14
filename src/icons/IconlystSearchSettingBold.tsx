import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchSettingBold = ({
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
      d="M11.214 9.582h-.13c-.34.01-.65.15-.88.39-.53.52-.53 1.38 0 1.9.23.24.54.38.88.39h.13c.34-.01.65-.15.88-.39.53-.52.53-1.38 0-1.9a1.26 1.26 0 0 0-.88-.39"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m13.894 11.642.35.2c.36.21.48.66.28 1.02-.21.36-.67.49-1.03.28l-.34-.2c-.36.35-.79.6-1.26.73v.39a.749.749 0 1 1-1.5 0v-.39a2.95 2.95 0 0 1-1.25-.73l-.34.2c-.37.21-.82.08-1.03-.28-.2-.36-.08-.81.28-1.02l.35-.2c-.13-.47-.13-.97 0-1.44l-.35-.2a.75.75 0 0 1-.28-1.02c.21-.36.67-.49 1.03-.28l.34.2c.36-.35.79-.6 1.25-.73v-.39a.749.749 0 1 1 1.5 0v.39c.47.13.9.38 1.26.73l.34-.2c.36-.21.82-.08 1.03.28.2.36.08.81-.28 1.02l-.35.2c.12.47.12.97 0 1.44m-2.76-9.14a8.42 8.42 0 1 0 0 16.841 8.42 8.42 0 0 0 0-16.84M20.992 19.79l-1.983-1.98a1 1 0 0 0-1.413 1.417l1.984 1.979a1 1 0 1 0 1.412-1.416"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchSettingBold;
