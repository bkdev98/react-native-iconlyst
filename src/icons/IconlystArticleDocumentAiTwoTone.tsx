import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArticleDocumentAiTwoTone = ({
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
    <G
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Path d="M4.228 11.526V7.931c0-2.745 1.718-4.684 4.456-4.684h5.892c.614 0 1.201.25 1.626.693l4.17 4.343c.403.42.628.98.628 1.562v5.49c0 2.745-1.71 4.685-4.457 4.685h-5.026" />
      <Path d="M15.107 3.316v3.18a2.814 2.814 0 0 0 2.808 2.816h3.013" />
    </G>
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m6.064 14.617-.12.322a4.44 4.44 0 0 1-2.622 2.627l-.322.12.322.119a4.44 4.44 0 0 1 2.623 2.626l.119.323.12-.323a4.44 4.44 0 0 1 2.622-2.626l.322-.12-.322-.12a4.44 4.44 0 0 1-2.623-2.626zM11.574 10.655a2.44 2.44 0 0 1-1.626 1.628 2.44 2.44 0 0 1 1.625 1.628c.238-.78.847-1.39 1.626-1.628a2.44 2.44 0 0 1-1.626-1.628"
    />
  </Svg>
);
export default IconlystArticleDocumentAiTwoTone;
