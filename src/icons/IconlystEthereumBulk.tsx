import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEthereumBulk = ({
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
      d="m19.35 11.963-6.649-9.878a.206.206 0 0 0-.333-.001L5.65 11.962c-.057.084-.026.193.068.242l6.718 3.534a.21.21 0 0 0 .198 0l6.648-3.534c.094-.05.124-.158.068-.241"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m18.91 13.528-6.275 3.395a.21.21 0 0 1-.2 0l-6.343-3.399c-.18-.098-.38.098-.258.253l6.542 8.15a.208.208 0 0 0 .317 0l6.475-8.147c.123-.155-.078-.35-.259-.252"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEthereumBulk;
