import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDigitalKeyOutline = ({
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
      d="M3.75 11.798a3.665 3.665 0 0 1 7.023-1.473.75.75 0 0 0 .687.449l2.059-.001.816.815a.75.75 0 0 0 .981.068l.874-.658.653.608a.75.75 0 0 0 .979.038l.818-.653.807.807-1.06 1.061-6.946.002a.75.75 0 0 0-.683.441 3.665 3.665 0 0 1-7.008-1.504m3.665-5.165A5.165 5.165 0 1 0 11.9 14.36l6.797-.002a.75.75 0 0 0 .53-.22l1.811-1.81a.75.75 0 0 0 0-1.061l-1.81-1.811a.75.75 0 0 0-.999-.056l-.837.667-.64-.596a.75.75 0 0 0-.962-.05l-.856.644-.575-.574a.75.75 0 0 0-.53-.22l-1.906.001a5.16 5.16 0 0 0-4.508-2.64M19.878 18.807a.373.373 0 1 1 0-.746.373.373 0 0 1 0 .746m-1.873-.373a1.873 1.873 0 1 0 3.745 0 1.873 1.873 0 0 0-3.745 0M19.878 5.195a.373.373 0 1 0 0 .746.373.373 0 0 0 0-.746m-1.873.373a1.873 1.873 0 1 1 3.745 0 1.873 1.873 0 0 1-3.745 0M13.268 18.807a.373.373 0 1 1 0-.746.373.373 0 0 1 0 .746m-1.873-.373a1.873 1.873 0 1 0 3.746 0 1.873 1.873 0 0 0-3.745 0M13.268 5.195a.373.373 0 1 0 0 .746.373.373 0 0 0 0-.746m-1.873.373a1.873 1.873 0 1 1 3.746 0 1.873 1.873 0 0 1-3.745 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.574 11.783a.64.64 0 1 0 1.281 0 .64.64 0 0 0-1.28 0m.64 2.14a2.14 2.14 0 1 1 0-4.28 2.14 2.14 0 0 1 0 4.28M16.855 19.184h1.9a.75.75 0 0 0 0-1.5h-1.15v-4.076a.75.75 0 1 0-1.5 0v4.826c0 .414.335.75.75.75M16.855 4.816h1.9a.75.75 0 0 1 0 1.5h-1.15v4.076a.75.75 0 1 1-1.5 0V5.566a.75.75 0 0 1 .75-.75M13.268 17.938a.75.75 0 0 0 .75-.75v-3.58a.75.75 0 0 0-1.5 0v3.58c0 .414.335.75.75.75M13.268 6.063a.75.75 0 0 1 .75.75v3.08a.75.75 0 1 1-1.5 0v-3.08a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDigitalKeyOutline;