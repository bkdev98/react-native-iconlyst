import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystProjectorScreenBold = ({
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
      d="M6.2 12.575c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.94c.41 0 .75.34.75.75s-.34.75-.75.75zm7.81-6.39c1.29 0 2.42.76 2.93 1.87.2.42.31.88.31 1.37a3.246 3.246 0 1 1-6.19-1.37 3.25 3.25 0 0 1 2.95-1.87m4.371 1.37h-.011c-.74-1.69-2.41-2.87-4.36-2.87s-3.63 1.18-4.37 2.87H5.628c-1.842 0-3.128 1.336-3.128 3.25v3.46c0 1.812 1.1 3.056 2.764 3.217l-.411.704a.75.75 0 1 0 1.294.757l.835-1.427 9.986.008.829 1.42a.75.75 0 1 0 1.295-.758l-.403-.689c1.666-.145 2.811-1.424 2.811-3.232v-3.46c0-1.944-1.253-3.25-3.119-3.25"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.42 8.455c.26.11.47.33.57.6.11.3.4.49.7.49.09 0 .17-.01.26-.05.39-.14.59-.57.44-.96q-.09-.255-.24-.48c-.27-.43-.68-.78-1.16-.98a.75.75 0 0 0-.98.4c-.08.19-.07.4.01.58.07.18.21.32.4.4"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystProjectorScreenBold;
