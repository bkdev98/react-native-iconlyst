import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCompoundOutline = ({
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
      d="M11.27 2.252c.257-.014.513.037.744.147l.01.004L19.9 6.281h.001a1.53 1.53 0 0 1 .855 1.365v8.448a1.53 1.53 0 0 1-.641 1.234l-5.591 4.122-.003.002c-.18.13-.384.221-.6.266a.8.8 0 0 1-.256.03 1.55 1.55 0 0 1-.744-.158l-8.566-4.238h-.001a1.53 1.53 0 0 1-.854-1.364v-2.946a1.538 1.538 0 0 1 2.197-1.348l.01.005 7.871 3.887a1.53 1.53 0 0 1 .875 1.36v2.692l4.777-3.522.014-.01.009-.01.003-.01V7.651a.03.03 0 0 0-.015-.023l-.002-.001-7.87-3.875a.04.04 0 0 0-.047.016l-.005.015v4.938a.75.75 0 0 1-1.5 0V3.753a1.54 1.54 0 0 1 1.454-1.5m1.683 17.68v-2.967l-.004-.013a.03.03 0 0 0-.011-.01l-.017-.008-7.87-3.886a.038.038 0 0 0-.051.03v2.904a.03.03 0 0 0 .015.023l.003.001z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.12 6.918c.256-.014.511.037.743.147l.01.004 7.874 3.877.002.001a1.52 1.52 0 0 1 .855 1.345v6.512a.75.75 0 0 1-1.5 0v-6.49l-.003-.01-.01-.008-.003-.002-7.87-3.875a.038.038 0 0 0-.052.03v4.924a.75.75 0 0 1-1.5 0V8.419a1.54 1.54 0 0 1 1.454-1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCompoundOutline;
