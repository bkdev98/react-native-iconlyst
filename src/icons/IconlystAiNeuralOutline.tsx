import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiNeuralOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M18.244 3.424c.838.782 1.302 1.891 1.302 3.187v10.777c0 1.299-.463 2.409-1.303 3.19-.833.776-1.976 1.172-3.242 1.172H8.999c-1.266 0-2.41-.396-3.242-1.172-.84-.782-1.303-1.892-1.303-3.19V6.61c0-1.298.464-2.408 1.303-3.19.833-.775 1.976-1.171 3.242-1.171h6.002c1.267 0 2.41.398 3.243 1.174M17.22 4.522c-.51-.475-1.264-.772-2.22-.772H8.999c-.957 0-1.712.296-2.22.77-.503.467-.825 1.163-.825 2.09v10.777c0 .929.322 1.625.825 2.093.508.474 1.263.77 2.22.77h6.002c.957 0 1.712-.296 2.22-.77.503-.468.825-1.164.825-2.092V6.611c0-.924-.322-1.62-.825-2.09"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.51 16.457a.75.75 0 0 0-.75-.75h-2.91l-1.117-1.454a.75.75 0 0 0-1.19.914l1.343 1.747a.75.75 0 0 0 .595.293h3.28a.75.75 0 0 0 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.85 13.865a.25.25 0 1 1-.5-.006.25.25 0 0 1 .5.005m-.267 1.747a1.75 1.75 0 1 0 .034-3.5 1.75 1.75 0 0 0-.034 3.5M7.442 6.955c0-.966.784-1.75 1.75-1.75h5.414c.966 0 1.75.784 1.75 1.75V8.85a1.75 1.75 0 0 1-1.75 1.75H9.192a1.75 1.75 0 0 1-1.75-1.75zm1.75-.25a.25.25 0 0 0-.25.25V8.85c0 .138.112.25.25.25h5.414a.25.25 0 0 0 .25-.25V6.955a.25.25 0 0 0-.25-.25zM11.028 17.659a.25.25 0 1 0-.5.005.25.25 0 0 0 .5-.005m-.267-1.747a1.75 1.75 0 1 1 .034 3.5 1.75 1.75 0 0 1-.034-3.5M9.009 13.438a.25.25 0 1 0-.5.005.25.25 0 0 0 .5-.005m-.267-1.747a1.75 1.75 0 1 1 .034 3.5 1.75 1.75 0 0 1-.034-3.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.769 18.412H5.25a.75.75 0 0 1 0-1.5h4.519a.75.75 0 0 1 0 1.5M7.75 14.191h-2.5a.75.75 0 0 1 0-1.5h2.5a.75.75 0 0 1 0 1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAiNeuralOutline;
