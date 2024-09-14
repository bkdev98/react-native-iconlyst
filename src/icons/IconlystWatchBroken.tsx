import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWatchBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.62 9.177c.005-1.878-1.134-2.9-2.974-2.9H9.358c-1.834 0-2.98 1.022-2.98 2.9v5.652c0 1.908 1.146 2.953 2.98 2.953h5.282c1.84 0 2.98-1.028 2.98-2.905v-2.355"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.847 17.648-.43 2.026A1.67 1.67 0 0 1 13.78 21h-3.56a1.674 1.674 0 0 1-1.637-1.325l-.429-2.027M15.847 6.352l-.43-2.026A1.67 1.67 0 0 0 13.78 3h-3.56c-.79 0-1.472.553-1.637 1.325l-.429 2.027M10.59 9.738c-.914.294-1.239 1.288-.96 2.16.448 1.393 2.37 2.44 2.37 2.44s1.936-1.062 2.37-2.44c.278-.872-.05-1.866-.963-2.16A1.57 1.57 0 0 0 12 9.976a1.56 1.56 0 0 0-1.41-.238"
    />
  </Svg>
);
export default IconlystWatchBroken;
