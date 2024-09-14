import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystQRCodeBoldsharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.15 18.28h1.5v-1.59h-1.5zm-3.4 3.36h8.31v-8.31H2.75zM16.85 18.28h1.5v-1.59h-1.5zm-3.41 3.36h8.31v-8.31h-8.31zM14.944 4.138h2.431v-1.5h-3.93v5.62h1.5zM13.445 10.943h3.72v-1.5h-3.72zM18.548 2.638v1.5h1.702V5.84h1.5v-3.2zM20.25 9.443h-1.702v1.5h3.202v-3.93h-1.5z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.767 5.003v3.719h3.33v-1.5h-1.83v-2.22z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m19.693 4.993-1.5.01v1.5h1.5zM6.15 7.589h1.5v-1.6h-1.5zm-3.4 3.35h8.31v-8.3H2.75z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystQRCodeBoldsharp;
