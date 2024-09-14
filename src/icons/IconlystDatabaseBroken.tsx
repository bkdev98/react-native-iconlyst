import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDatabaseBroken = ({
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
      d="M4.422 6v6s0 3 7.579 3 7.578-3 7.578-3V6"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 21c7.58 0 7.58-3 7.58-3v-6M4.422 12v6s0 1.9 3.816 2.676M12 3C7.816 3 4.423 4.352 4.423 6.019S7.815 9.038 12 9.038c4.185 0 7.578-1.352 7.578-3.02 0-1.105-1.492-2.072-3.718-2.598"
    />
  </Svg>
);
export default IconlystDatabaseBroken;
