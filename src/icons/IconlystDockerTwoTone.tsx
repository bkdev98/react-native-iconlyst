import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDockerTwoTone = ({
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
      d="M17.023 8.719c.757.466 1.414 1.143 1.548 2.052.882-.15 1.677.004 2.429.486-.578 1.19-1.422 1.776-2.806 1.754-1.115 2.716-3.4 5.341-6.236 6.053-2.209.547-5.009.667-6.904-.8-1.554-1.18-2.298-4.026-1.983-5.931 4.139-.003 8.277.004 12.416-.004a2.85 2.85 0 0 0 1.169-.296c-.683-1.074-.285-2.343.367-3.314"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.135 18.236c.713.152 2.34 0 3.377-1.197M6.938 11.997V7.22h5.03m-7.56 4.777v-2.23H14.53v2.23m-5.062.002v-7.44h2.53v7.44M10.011 15.047h-.01"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDockerTwoTone;
