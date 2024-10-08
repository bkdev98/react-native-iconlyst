import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMovieAiOutline = ({
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
      d="M3.73 3.825C4.67 2.814 6.011 2.25 7.595 2.25h7.997c1.583 0 2.924.564 3.865 1.575.935 1.005 1.42 2.39 1.42 3.942v2.587a.75.75 0 0 1-1.5 0V7.767c0-1.242-.385-2.24-1.018-2.92-.627-.674-1.554-1.097-2.767-1.097H7.596c-1.214 0-2.141.423-2.769 1.097-.633.68-1.018 1.678-1.018 2.92v7.613c0 1.241.385 2.24 1.018 2.92.628.674 1.555 1.096 2.768 1.096h2.608a.75.75 0 0 1 0 1.5H7.595c-1.584 0-2.925-.564-3.866-1.575-.936-1.004-1.42-2.39-1.42-3.941V7.767c0-1.552.484-2.937 1.42-3.942"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.316 7.469a.75.75 0 0 1 .75-.75h17.057a.75.75 0 1 1 0 1.5H3.066a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.623 2.25a.75.75 0 0 1 .75.75v4.468a.75.75 0 1 1-1.5 0V3a.75.75 0 0 1 .75-.75m5.942 0a.75.75 0 0 1 .75.75v4.468a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75M17.026 13.183a.75.75 0 0 1 .704.49l.12.327a3.75 3.75 0 0 0 2.213 2.216l.326.12a.75.75 0 0 1 0 1.407l-.326.121a3.75 3.75 0 0 0-2.213 2.216l-.12.327a.75.75 0 0 1-1.407 0l-.121-.327a3.75 3.75 0 0 0-2.212-2.216l-.326-.12a.75.75 0 0 1 0-1.407l.326-.121A3.75 3.75 0 0 0 16.202 14l.12-.327a.75.75 0 0 1 .704-.49M15.64 17.04a5.3 5.3 0 0 1 1.386 1.388 5.3 5.3 0 0 1 1.387-1.388 5.3 5.3 0 0 1-1.387-1.388 5.3 5.3 0 0 1-1.386 1.388M10.354 11.048a.75.75 0 0 1 .718.531c.18.593.642 1.055 1.232 1.235a.75.75 0 0 1 0 1.435c-.59.18-1.052.643-1.232 1.235a.75.75 0 0 1-1.435 0 1.85 1.85 0 0 0-1.233-1.235.75.75 0 0 1 0-1.435 1.85 1.85 0 0 0 1.233-1.235.75.75 0 0 1 .717-.531m-.245 2.484q.13.116.245.245.117-.13.246-.245a3 3 0 0 1-.246-.246q-.116.129-.245.246"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMovieAiOutline;
