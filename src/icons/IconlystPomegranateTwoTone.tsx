import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPomegranateTwoTone = ({
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
      d="M13.982 6.178c-.002-.472 1.144-2.38.922-2.588-.485-.412-1.64.343-1.976.656 0 0-.344-1.189-.939-1.246-.56 0-.934 1.264-.934 1.264-.36-.3-1.073-.81-1.58-.55-.424.207.704 1.97.674 2.433"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.982 6.177c.942.12 1.89.273 2.779.616.849.314 1.463 1.208 1.918 1.939 1.018 1.655 1.618 3.66 1.475 5.613-.115 1.468-.913 2.822-1.865 3.909a10.4 10.4 0 0 1-1.675 1.531c-.856.616-1.907 1.226-2.998 1.215-1.095-.005-2.19-.006-3.284-.036-1.395-.08-2.52-.639-3.57-1.58-1.056-.947-1.923-2.113-2.479-3.42-.634-1.501-.582-3.014-.015-4.534a11.5 11.5 0 0 1 2.45-3.888c.64-.657 1.307-.862 2.178-1.106.413-.116.83-.215 1.253-.289"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPomegranateTwoTone;
