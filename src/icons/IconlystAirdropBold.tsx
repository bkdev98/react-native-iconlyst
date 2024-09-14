import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAirdropBold = ({
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
      d="M13.8 13.235c-.02.02-.03.05-.05.07h-.15v-3.42h4.07zm.2 4.33h-2.31a.749.749 0 1 1 0-1.5H14a.749.749 0 1 1 0 1.5m-5.99-7.68h4.09v3.42h-.17c-.02-.02-.02-.04-.04-.05zm12.51-1.93c-.58-3.75-3.87-6.58-7.67-6.58s-7.09 2.83-7.67 6.58c-.13.9.27 1.82.97 2.3l3.58 3.11c-1.45.23-2.42 1.41-2.42 3.02l.01 3.19c.01 1.8 1.22 3.05 2.95 3.05l5.17-.01c.84 0 1.56-.28 2.09-.81.55-.55.85-1.35.85-2.26l-.01-3.19c-.01-1.6-.97-2.77-2.41-3.01l3.52-3.04c.77-.52 1.17-1.45 1.04-2.35"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAirdropBold;
