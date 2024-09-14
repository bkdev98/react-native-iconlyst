import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSubtitleExploreBroken = ({
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
      d="M21.075 11.386v-2.97c.01-3.017-1.814-4.658-4.757-4.658h-8.46c-2.933 0-4.765 1.641-4.765 4.658v3.542M12.084 20.243H7.859c-2.934 0-4.766-1.68-4.766-4.743v-1.055M17.734 8.574H3.084M12.24 12.375h-.535m-4.418 3.457h2.21M9 12.375H7.346M17.63 13.727a2.916 2.916 0 1 1-2.399 1.259m4.385 3.793 1.468 1.464"
    />
  </Svg>
);
export default IconlystSubtitleExploreBroken;
