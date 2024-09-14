import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOntologyOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M3.24 4.642a.75.75 0 0 1 .818.167l13.483 13.657a.75.75 0 0 1-.038 1.089c-1.612 1.422-3.796 2.281-6.087 2.188-4.878-.1-8.643-4.297-8.643-9.188l.001-7.22a.75.75 0 0 1 .466-.693m1.034 2.52v5.393c0 4.153 3.19 7.61 7.18 7.688h.017c1.603.068 3.158-.436 4.414-1.32zM8.614 5.076l11.61 11.76.002-5.392c0-4.153-3.19-7.61-7.181-7.687l-.017-.001c-1.604-.067-3.158.436-4.414 1.32m4.468-2.819c-2.29-.094-4.474.765-6.086 2.188a.75.75 0 0 0-.038 1.089l13.483 13.657a.75.75 0 0 0 1.284-.527v-7.22c0-4.89-3.764-9.087-8.643-9.187"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystOntologyOutline;
