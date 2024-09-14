import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHemisphereBold = ({
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
      d="M15.575 9.286c3.83 3.84 5.44 7.95 4.33 9.06-1.12 1.11-5.22-.51-9.05-4.34-3.23-3.23-4.68-6.34-4.68-7.99 0-.48.12-.83.34-1.06.23-.22.6-.33 1.06-.34 1.66 0 4.77 1.45 8 4.67m1.06-1.06c-1.56-1.55-3.22-2.83-4.8-3.72-1.57-.89-3.06-1.39-4.26-1.39-.88 0-1.61.27-2.12.78-4.27 4.28-4.27 11.24 0 15.51 2.07 2.08 4.83 3.22 7.76 3.22 2.83 0 5.49-1.06 7.54-3.02.02-.02.05-.04.07-.06.05-.04.09-.09.14-.13v-.01c.04-.04.08-.08.1-.12 2.02-2.28-.74-7.37-4.43-11.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHemisphereBold;
