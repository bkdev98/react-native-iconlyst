import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFavoriteDateOutline = ({
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
      d="M10.303 16.962c-.12 0-.25-.02-.37-.06-.32-.1-.58-.31-.74-.61a1.27 1.27 0 0 1-.13-.79l.26-1.51-1.11-1.06c-.49-.48-.51-1.26-.04-1.76.2-.21.46-.34.74-.37l1.53-.22.69-1.37c.32-.62 1.08-.86 1.7-.55.23.12.42.31.54.53v.01l.69 1.37 1.54.22a1.259 1.259 0 0 1 1.07 1.4c-.04.28-.17.54-.37.73l-1.11 1.06.26 1.5c.11.69-.36 1.33-1.04 1.44-.27.04-.54 0-.78-.13l-1.37-.71-1.38.72c-.18.09-.38.14-.58.14zm-.67-4.74.83.79c.3.28.44.7.36 1.11l-.2 1.13 1.05-.54c.37-.19.8-.19 1.16 0l1.05.55-.2-1.14c-.07-.4.06-.82.36-1.11l.83-.8-1.16-.17c-.4-.06-.76-.31-.94-.67l-.53-1.05-.53 1.05c-.19.37-.54.62-.95.68l-1.15.17z"
    />
  </Svg>
);
export default IconlystFavoriteDateOutline;
