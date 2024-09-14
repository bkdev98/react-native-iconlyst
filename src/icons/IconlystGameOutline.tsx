import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGameOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.822 1a.75.75 0 0 1 .75.75c0 .326.277.59.618.59h1.057c1.573.006 2.858 1.27 2.865 2.819v.218q1.532.007 3.078.033c3.651 0 6.31 2.609 6.31 6.202v4.65c0 3.59-2.655 6.198-6.316 6.201a271 271 0 0 1-8.874 0c-3.65 0-6.31-2.609-6.31-6.201v-4.65C1 8.019 3.66 5.41 7.323 5.41c1.405-.024 2.838-.036 4.288-.037v-.21c-.002-.724-.616-1.32-1.367-1.322H9.19c-1.167 0-2.118-.938-2.118-2.091a.75.75 0 0 1 .75-.75m3.88 5.873q-2.217 0-4.367.037C4.528 6.91 2.5 8.888 2.5 11.612v4.65c0 2.723 2.028 4.701 4.823 4.701 2.947.049 5.918.049 8.842 0h.013c2.794 0 4.822-1.978 4.822-4.701v-4.65c0-2.724-2.028-4.702-4.822-4.702a281 281 0 0 0-4.477-.037m-3.104 4.442a.75.75 0 0 1 .75.75v1.12l1.16.002a.75.75 0 0 1 0 1.5l-1.16-.001v1.124a.75.75 0 0 1-1.5 0v-1.124h-1.16a.75.75 0 0 1 0-1.5h1.16v-1.121a.75.75 0 0 1 .75-.75m8.332 3.688a.75.75 0 0 1 0 1.5h-.107a.75.75 0 0 1 0-1.5zm-1.814-3.574a.75.75 0 0 1 0 1.5h-.107a.75.75 0 0 1 0-1.5z"
    />
  </Svg>
);
export default IconlystGameOutline;
