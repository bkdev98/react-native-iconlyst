import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSadDateOutline = ({
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
      d="M16.441 2.25a.75.75 0 0 1 .75.75v3.223a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75M8.617 2.25a.75.75 0 0 1 .75.75v3.223a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.051 3.737h8.964c1.455 0 2.73.405 3.645 1.276.92.878 1.378 2.134 1.374 3.636v8.18c0 1.502-.46 2.76-1.38 3.638-.915.874-2.19 1.282-3.647 1.282H8.051c-1.456 0-2.732-.416-3.648-1.303-.919-.89-1.379-2.164-1.379-3.684V8.649c0-1.503.463-2.76 1.385-3.635.916-.871 2.19-1.277 3.642-1.277m8.964 1.5H8.051c-1.181 0-2.045.328-2.609.864-.558.53-.918 1.355-.918 2.548v8.113c0 1.217.362 2.063.923 2.607.565.547 1.427.88 2.604.88h8.956c1.185 0 2.048-.33 2.611-.867.558-.532.916-1.36.916-2.553V8.646c.003-1.193-.353-2.017-.909-2.547-.561-.535-1.424-.863-2.61-.863"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.866 18.006a.75.75 0 0 0 .122-1.054 3.13 3.13 0 0 0-2.459-1.19c-.997 0-1.886.467-2.46 1.19a.75.75 0 0 0 1.177.932c.3-.38.763-.622 1.283-.622s.982.242 1.283.622a.75.75 0 0 0 1.054.122M15.503 12.388a.75.75 0 0 1 .75.75v.636a.75.75 0 0 1-1.5 0v-.636a.75.75 0 0 1 .75-.75M9.556 12.388a.75.75 0 0 1 .75.75v.636a.75.75 0 0 1-1.5 0v-.636a.75.75 0 0 1 .75-.75M3.686 9.665a.75.75 0 0 1 .75-.75h16.196a.75.75 0 0 1 0 1.5H4.436a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSadDateOutline;
