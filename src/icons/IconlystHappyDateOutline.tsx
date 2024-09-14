import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHappyDateOutline = ({
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
      d="M16.166 2.25a.75.75 0 0 1 .75.75v3.223a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75M8.341 2.25a.75.75 0 0 1 .75.75v3.223a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.776 3.737h8.964c1.454 0 2.73.405 3.645 1.276.92.878 1.378 2.134 1.374 3.636v8.18c0 1.502-.46 2.76-1.38 3.638-.916.874-2.191 1.282-3.647 1.282H7.776c-1.456 0-2.733-.416-3.648-1.303-.919-.89-1.379-2.164-1.379-3.684V8.649c0-1.503.462-2.76 1.384-3.635.916-.871 2.191-1.277 3.643-1.277m8.964 1.5H7.776c-1.182 0-2.045.328-2.61.864-.558.53-.917 1.355-.917 2.548v8.113c0 1.217.362 2.063.923 2.607.565.547 1.427.88 2.604.88h8.956c1.185 0 2.048-.33 2.61-.867.558-.532.917-1.36.917-2.553V8.646c.003-1.193-.354-2.017-.91-2.547-.56-.535-1.423-.863-2.61-.863"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.59 15.924a.75.75 0 0 1 .123 1.053 3.13 3.13 0 0 1-2.46 1.19 3.13 3.13 0 0 1-2.459-1.19.75.75 0 0 1 1.176-.93c.301.379.764.62 1.284.62s.982-.241 1.283-.62a.75.75 0 0 1 1.053-.123M15.228 12.388a.75.75 0 0 1 .75.75v.636a.75.75 0 1 1-1.5 0v-.636a.75.75 0 0 1 .75-.75M9.28 12.388a.75.75 0 0 1 .75.75v.636a.75.75 0 0 1-1.5 0v-.636a.75.75 0 0 1 .75-.75M3.41 9.665a.75.75 0 0 1 .75-.75h16.197a.75.75 0 0 1 0 1.5H4.16a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHappyDateOutline;
