import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStickerPin2Broken = ({
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
      d="M15.05 20.687v-3.212a2.84 2.84 0 0 1 2.836-2.842M15.275 9.633h-3.24m.423 4.49h-3.76M5.849 8.98v1.912M4.583 3.246a1.016 1.016 0 0 0-.707 1.748s.466.349.54.522c.093.22.107.742 0 .955-.108.217-.775.581-.775.581A1.6 1.6 0 0 0 3 8.335c0 .357.29.646.647.646h4.405a.647.647 0 0 0 .647-.646c0-.505-.239-.98-.642-1.283 0 0-.666-.364-.774-.58-.107-.214-.094-.736 0-.956.073-.173.54-.522.54-.522a1.018 1.018 0 0 0-.708-1.748"
    />
  </Svg>
);
export default IconlystStickerPin2Broken;
