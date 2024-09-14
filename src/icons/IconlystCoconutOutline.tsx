import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCoconutOutline = ({
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
      d="M17.77 6.902a.75.75 0 0 0 .068 1.058c1.027.903 1.8 2.603 1.8 4.56 0 4.448-3.417 7.73-7.638 7.73s-7.638-3.282-7.638-7.73c0-1.681.81-3.566 1.915-4.567A.75.75 0 1 0 5.269 6.84c-1.447 1.312-2.407 3.614-2.407 5.678 0 5.283 4.094 9.231 9.138 9.231s9.138-3.948 9.138-9.23c0-2.308-.903-4.45-2.31-5.686a.75.75 0 0 0-1.058.068"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.018 2.818a.75.75 0 0 1 .91-.546l3.437.86c.577.144 1.04.576 1.222 1.142l.005.016 1.666 5.58a.75.75 0 0 1-1.438.43l-1.662-5.57a.23.23 0 0 0-.157-.143l-3.437-.86a.75.75 0 0 1-.546-.909"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.581 7.582c-.234.215-.265.359-.265.423s.031.208.265.422c.235.215.617.444 1.152.65 1.064.413 2.586.684 4.305.684s3.24-.27 4.305-.683c.535-.207.916-.436 1.15-.65.235-.215.266-.36.266-.423 0-.064-.03-.208-.265-.423s-.616-.443-1.151-.65c-1.065-.412-2.587-.684-4.305-.684-1.719 0-3.24.272-4.305.684-.535.207-.917.435-1.152.65m.61-2.049c1.277-.495 2.991-.785 4.847-.785 1.855 0 3.569.29 4.846.785.637.247 1.203.558 1.623.943s.752.9.752 1.529-.332 1.144-.752 1.529c-.42.384-.986.696-1.623.942-1.277.495-2.99.785-4.846.785s-3.57-.29-4.847-.784c-.636-.247-1.203-.559-1.623-.943-.42-.385-.752-.901-.752-1.53 0-.627.332-1.143.752-1.528s.987-.696 1.623-.943"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCoconutOutline;
