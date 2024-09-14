import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchSettingBulk = ({
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
      d="M11.135 2.5a8.42 8.42 0 0 0 0 16.84c4.64 0 8.41-3.77 8.41-8.42s-3.77-8.42-8.41-8.42"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m20.992 19.79-1.983-1.98a1 1 0 0 0-1.413 1.417l1.984 1.978a1 1 0 1 0 1.412-1.416M14.244 11.842l-.35-.2c.12-.47.12-.97 0-1.44l.35-.2c.36-.21.48-.66.28-1.02a.755.755 0 0 0-1.03-.28l-.34.2c-.36-.35-.79-.6-1.26-.73v-.39a.749.749 0 1 0-1.5 0v.39c-.46.13-.89.38-1.25.73l-.34-.2a.755.755 0 0 0-1.03.28c-.2.36-.08.81.28 1.02l.35.2c-.13.47-.13.97 0 1.44l-.35.2c-.36.21-.48.66-.28 1.02.21.36.66.49 1.03.28l.34-.2c.36.35.79.6 1.25.73v.39a.749.749 0 1 0 1.5 0v-.39c.47-.13.9-.38 1.26-.73l.34.2c.36.21.82.08 1.03-.28.2-.36.08-.81-.28-1.02m-3.16-2.26h.13c.34.01.65.15.88.39.53.52.53 1.38 0 1.9-.23.24-.54.38-.88.39h-.13a1.26 1.26 0 0 1-.88-.39c-.53-.52-.53-1.38 0-1.9.23-.24.54-.38.88-.39"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchSettingBulk;
