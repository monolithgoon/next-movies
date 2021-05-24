/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import clsx from 'clsx';

import Rating from 'components/Rating';
import LanguagesRuntimeRelease from './LanguagesRuntimeRelease';

const BasicsSection = ({
  className,
  voteAverage,
  spokenLanguages,
  runtime,
  releaseDate
}) => (
  <>
    <div className={clsx('basics-section', className)}>
      <Rating
        withValue
        voteAverage={voteAverage} />
      <LanguagesRuntimeRelease
        spokenLanguages={spokenLanguages}
        runtime={runtime}
        releaseDate={releaseDate} />
    </div>
    <style jsx>{`
      .basics-section {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    `}</style>
  </>
);

export default BasicsSection;