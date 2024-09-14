import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarEmojiBroken = ({
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
      d="m6.203 17.83-.217 1.248a1.228 1.228 0 0 0 1.787 1.28l3.656-1.895c.36-.186.787-.186 1.147 0l3.654 1.894a1.228 1.228 0 0 0 1.788-1.28l-.7-4.012c-.07-.396.063-.8.354-1.076l2.958-2.842a1.211 1.211 0 0 0-.682-2.072l-2.045-.295M14.93 7.821l-1.827-3.653a1.24 1.24 0 0 0-2.201 0L9.07 7.822c-.182.36-.53.608-.928.664l-4.09.59a1.211 1.211 0 0 0-.682 2.072l2.96 2.841"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.367 14.523c.403.457.928.785 1.61.792.714.007 1.227-.33 1.656-.792M10.121 11.228v.01M13.88 11.228v.01"
    />
  </Svg>
);
export default IconlystStarEmojiBroken;
