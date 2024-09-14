import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCombineLight = ({
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
      d="M11.542 3h6.036C19.687 3 21 4.489 21 6.596v5.687c0 2.108-1.313 3.597-3.423 3.597h-6.035c-2.11 0-3.42-1.49-3.42-3.597V6.596C8.121 4.49 9.438 3 11.541 3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.422 8.121h6.036c2.109 0 3.422 1.489 3.422 3.596v5.687c0 2.108-1.313 3.596-3.424 3.596H6.423C4.312 21 3 19.513 3 17.405v-5.687C3 9.61 4.32 8.121 6.422 8.121"
    />
  </Svg>
);
export default IconlystCombineLight;
