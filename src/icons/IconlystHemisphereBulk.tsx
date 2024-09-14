import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHemisphereBulk = ({
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
      d="M16.635 7.506c-1.56-1.55-3.22-2.83-4.8-3.72-1.57-.89-3.06-1.39-4.26-1.39-.88 0-1.61.27-2.12.78-4.27 4.28-4.27 11.24 0 15.51 2.07 2.08 4.83 3.22 7.76 3.22 2.83 0 5.49-1.06 7.54-3.02.02-.02.05-.04.07-.06.05-.04.09-.09.14-.13v-.01c.04-.04.08-.08.1-.12 2.02-2.28-.74-7.37-4.43-11.06"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M19.905 17.626c1.11-1.11-.5-5.22-4.33-9.06-3.23-3.22-6.34-4.67-8-4.67-.46.01-.83.12-1.06.34-.22.23-.34.58-.34 1.06 0 1.65 1.45 4.76 4.68 7.99 3.83 3.83 7.93 5.45 9.05 4.34"
    />
  </Svg>
);
export default IconlystHemisphereBulk;
