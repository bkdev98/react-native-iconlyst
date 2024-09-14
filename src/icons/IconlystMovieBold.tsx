import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMovieBold = ({
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
      d="M19.005 7.586a.3.3 0 0 0 .27.167h2.692a.29.29 0 0 0 .291-.322c-.333-2.64-2.209-4.368-4.907-4.368h-.082a.3.3 0 0 0-.27.433zM15.224 3.28c-.057-.116-.153-.217-.283-.217h-2.686a.3.3 0 0 0-.269.432l2.006 4.09a.3.3 0 0 0 .27.168h2.674a.3.3 0 0 0 .27-.432zM8.992 7.585a.3.3 0 0 0 .27.168h2.66a.3.3 0 0 0 .27-.432l-1.981-4.04c-.057-.117-.153-.218-.283-.218H8.316c-.377 0-.73.045-1.07.116a.29.29 0 0 0-.195.412zM3.634 9.254a.3.3 0 0 0-.3.3v6.17c0 3.122 2.002 5.219 4.982 5.219h9.033c2.981 0 4.984-2.097 4.984-5.22v-6.17a.3.3 0 0 0-.3-.3zM6.927 7.754a.3.3 0 0 0 .27-.432l-1.54-3.168a.283.283 0 0 0-.426-.11c-.998.762-1.64 1.937-1.822 3.388a.29.29 0 0 0 .292.322z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMovieBold;
