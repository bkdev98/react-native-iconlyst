import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCombineTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.042 3h6.036C20.187 3 21.5 4.489 21.5 6.596v5.687c0 2.108-1.313 3.597-3.423 3.597h-6.035c-2.11 0-3.42-1.49-3.42-3.597V6.596C8.621 4.49 9.938 3 12.041 3"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.922 8.121h6.036c2.109 0 3.422 1.489 3.422 3.596v5.687c0 2.108-1.313 3.596-3.423 3.596H6.922C4.812 21 3.5 19.513 3.5 17.405v-5.687c0-2.107 1.32-3.596 3.422-3.596"
    />
  </Svg>
);
export default IconlystCombineTwoTone;
