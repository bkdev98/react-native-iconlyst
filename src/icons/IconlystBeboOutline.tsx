import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBeboOutline = ({
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
      d="M12.495 21.744s-1.22 0-1.38-.02c-4.22-.18-7.56-3.66-7.56-7.94v-8.99c0-1.41 1.14-2.55 2.55-2.55s2.55 1.14 2.55 2.55v8.99c0 1.49 1.12 2.71 2.6 2.84.15 0 1.14.02 1.24.02 1.57 0 2.85-1.28 2.85-2.85 0-1.84-1.35-2.5-2.49-2.72h-.04a2.54 2.54 0 0 1 .5-5.03c.22 0 .44.03.65.09 4.03.73 6.48 3.6 6.48 7.67 0 4.38-3.56 7.95-7.95 7.95zm-6.39-18c-.58 0-1.05.47-1.05 1.05v8.99c0 3.47 2.71 6.3 6.17 6.44.18.01 1.18.02 1.28.02 3.55 0 6.45-2.89 6.45-6.45s-1.89-5.59-5.32-6.21c-.14-.04-.23-.05-.31-.05-.57 0-1.04.47-1.04 1.04a1.03 1.03 0 0 0 .88 1.02c2.31.46 3.69 2.03 3.69 4.2 0 2.4-1.95 4.35-4.35 4.35-.01 0-1.22 0-1.38-.02a4.33 4.33 0 0 1-3.96-4.34v-8.99c0-.58-.47-1.05-1.05-1.05z"
    />
  </Svg>
);
export default IconlystBeboOutline;
