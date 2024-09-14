import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKettlebell2Bold = ({
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
      d="M16.355 14.881c0 .791-.49 1.637-1.869 1.637-.7 0-1.346-.27-1.819-.764-.508-.529-.782-1.287-.749-2.078a2.76 2.76 0 0 1 .891-1.91 2.5 2.5 0 0 1 1.812-.667 2.7 2.7 0 0 1 1.067.278.75.75 0 1 1-.666 1.344 1.2 1.2 0 0 0-.479-.124c-.255-.022-.514.085-.723.276-.243.222-.39.537-.403.864-.016.385.105.742.332.978.19.198.445.303.737.303.285 0 .372-.06.372-.06v-.4h-.372a.75.75 0 0 1 0-1.5h1.12a.75.75 0 0 1 .75.75zm-4.999.057a.751.751 0 0 1-.964 1.15l-1.254-1.052v.61a.75.75 0 0 1-1.5 0v-3.679a.75.75 0 0 1 1.5 0v.61l1.254-1.052a.75.75 0 0 1 .964 1.15l-1.35 1.131zM9.542 4.558c.008-.004.88-.44 2.39-.44 1.598 0 2.551.446 2.617.475.924.357.867.678.697 1.63a7 7 0 0 0-.122.987 7.4 7.4 0 0 0-6.232-.012 7 7 0 0 0-.123-.975c-.17-.952-.227-1.273.773-1.665m8.976 5.823c-.01-.026-.01-.055-.026-.08-.084-.153-.18-.283-.274-.419l-.058-.089a8 8 0 0 0-.299-.403q-.085-.112-.177-.222-.043-.056-.088-.11c-.269-.327-.548-.665-.812-1.084-.237-.374-.18-.812-.06-1.488.175-.992.442-2.49-1.574-3.266-.049-.024-1.245-.602-3.218-.602-1.893 0-3.018.576-3.008.576h.001c-2.077.802-1.81 2.3-1.633 3.292.12.676.176 1.114-.06 1.488a10 10 0 0 1-.729.98 7.3 7.3 0 0 0-.943 1.29c-.012.02-.026.035-.038.056l-.004.014c-1.588 2.831-1.186 6.487 1.22 8.893a7.41 7.41 0 0 0 5.258 2.174 7.4 7.4 0 0 0 5.256-2.174 7.39 7.39 0 0 0 2.18-5.258 7.4 7.4 0 0 0-.914-3.568"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystKettlebell2Bold;
