import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTriangle2Bold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.299 16.045a.6.6 0 0 0-.6 0l-7.867 4.538c-.182.106-.2.362-.016.465.353.198.753.312 1.18.312h14.007c.427 0 .826-.114 1.18-.311.184-.103.166-.36-.017-.465zM12.75 14.227a.6.6 0 0 0 .3.52l8.014 4.624c.168.097.383.01.41-.182a2.45 2.45 0 0 0-.304-1.557l-6.96-12.21a2.47 2.47 0 0 0-1.087-1.014c-.18-.086-.373.058-.373.258zM10.95 14.747a.6.6 0 0 0 .3-.52V4.719c0-.205-.202-.349-.383-.254a2.43 2.43 0 0 0-.982.944L2.837 17.62a2.46 2.46 0 0 0-.311 1.567c.026.192.242.279.41.182z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTriangle2Bold;
