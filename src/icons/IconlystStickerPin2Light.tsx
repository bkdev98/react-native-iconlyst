import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStickerPin2Light = ({
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
      d="M4.07 14.173v1.854c0 2.77 1.734 4.727 4.498 4.727h5.948c.62 0 1.212-.253 1.641-.7l4.21-4.383c.406-.425.633-.989.633-1.576V8.552c0-2.77-1.725-4.728-4.498-4.728h-4.186"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.05 20.687v-3.212a2.84 2.84 0 0 1 2.836-2.842h3.041M15.275 9.633h-3.24m.423 4.49h-3.76M5.849 8.98v1.912M8.06 3.887c.152.384.059.82-.237 1.107 0 0-.467.349-.54.522-.094.22-.107.742 0 .955.108.217.774.581.774.581.403.303.642.778.642 1.283 0 .357-.29.646-.647.646H3.647A.647.647 0 0 1 3 8.335c0-.505.237-.98.641-1.283 0 0 .667-.364.775-.58.107-.214.093-.736 0-.956-.074-.173-.54-.522-.54-.522a1.016 1.016 0 0 1 .707-1.748h2.532c.417 0 .792.254.945.641"
    />
  </Svg>
);
export default IconlystStickerPin2Light;
